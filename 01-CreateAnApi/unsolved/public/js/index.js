
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
        <div class="rounded border border-primary m-4">
        <div class="m-3">
            <h3>${(result[i].WORD).toUpperCase()}:</h3>
            <textarea readonly>
                ${result[i].MEANING}
            </textarea>
            <button id="deleteBtn" data-delete="${result[i].id}" type="button"class="btn btn-danger">Delete</button>
            <button id="updateBtn" type="button" class="btn btn-primary">Update</button> 
        </div>
        </div>
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
    $("textarea").prop("readonly",false)

})