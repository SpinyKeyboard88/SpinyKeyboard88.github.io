function openPage(pageName, tabItem) {
    //settingUpEquipment
    //configuringMixPre10
    //exportingProject
    var i, j;
    var visible;
    const tabcontent = document.getElementsByClassName("section");
    for (let index = 0; index < tabcontent.length; index++) {
        i = tabcontent.item(index);
        j = document.getElementById(i.id);
        j.classList.add("hidden");
        j.classList.remove("unhidden");
    }

    visible = document.getElementById(pageName);
    visible.classList.remove("hidden");
    visible.classList.add("unhidden");

}