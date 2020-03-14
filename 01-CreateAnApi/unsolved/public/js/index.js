
$("#searchWords").on("click",function(event){
    $("#wordsContainer").empty()
    var words = [];
    event.preventDefault()
    $.ajax({
        method:"GET",
        url:"/api/all"
    }).then(function(result){
        console.log(result)
        for(var i = 0; i < result.length;i++){
        words.push(result[i])
        $("#wordsContainer").append(`
        <form data-word="${result[i].id}">
        <div class="rounded border border-primary m-4">
        <div class="m-3">
            <h3>${(result[i].WORD).toUpperCase()}:</h3>
            <textarea readonly>
                ${result[i].MEANING}
            </textarea>
            <button id="deleteBtn" data-delete="${result[i].id}" type="button"class="btn btn-danger">Delete</button>
            <button id="updateBtn" data-update="${result[i].id}" type="button" class="btn btn-primary">Update</button> 
        </div>
        </div>
        </form>
        `)
        }
    })
})

$(document).on("click","#deleteBtn", function(event){
    event.preventDefault()
    //console.log($(`#${id}`))
    var id = $(this).attr("data-delete")
    console.log($(this).attr("data-delete"))
    $.ajax({
        type:"DELETE",
        url:`/api/delete/${id}`
    }).then(function(){
        console.log("success!")
        location.reload()
    })

})
$(document).on("click","#updateBtn",function(event){
    event.preventDefault()
    console.log($("form").attr("data-word"))
    console.log($(this).attr("data-update"))
    if($(this).attr("data-update")===$("form").attr("data-word")){
    console.log($("form").attr("data-word"))
    $("form").find($("textarea").prop("readonly",false))
    }
})
$(document).on("click","#create",function(event){
    event.preventDefault()
    var day = new Date().getDay()
    var month  = new Date().getMonth()
    var year = new Date().getFullYear()
    var fullDate = year+"-"+day+"-"+year
    var word= ($("#word").val().trim())
    var meaning = ($("#meaning").val().trim())
    var createdNewWords = {
        WORD:word,
        MEANING:meaning,
        createdAt:fullDate,
        updatedAt:fullDate
    }
    console.log(createdNewWords)
    $.ajax({
        type:"PUT",
        url:"/api/word",
        data:createdNewWords
    })
    .then(function(result){
        console.log(result)
        console.log("It has loaded")
        //location.reload()
    })
})