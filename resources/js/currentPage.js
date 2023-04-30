switch ($("title").attr("id")) {
    case "index":
        $('#currentPage').text("it's the index page")
        break;
    case "about":
        $('#currentPage').text("it's the about page")
        break;
    case "contact":
        $('#currentPage').text("it's the contact page")
        break;
}