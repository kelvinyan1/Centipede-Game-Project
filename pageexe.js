var current_page = 1, total_page = 4;
var current_page_id = 'p1'

function NextPage(){
    switch(current_page){
        case 1:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p2').style.display='block';
        current_page_id = 'p2';
        break;
        case 2:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p3').style.display='block';
        current_page_id = 'p3'
        break;
        case 3:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p4').style.display='block';
        current_page_id = 'p4'
        break;
        case 0:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p1').style.display='block';
        current_page_id = 'p1'
    }
    current_page = current_page + 1;
    current_page = current_page % total_page;
}

function GotoPage(tar){
    current_page = tar-1;
    NextPage();

}


var current_item = 1, total_item = 4;

function NextItem(){
    switch(current_item){
        case 1:
        document.getElementById('i1').style.visibility = "visible";
        break;
        case 2:
        document.getElementById('i2').style.visibility = "visible";
        break;
        case 3:
        document.getElementById('i3').style.visibility = "visible";
        break;
        case 0:
        document.getElementById('i1').style.visibility = "hidden";
        document.getElementById('i2').style.visibility = "hidden";
        document.getElementById('i3').style.visibility = "hidden";
    }
    current_item = current_item + 1;
    current_item = current_item % total_item;
}





