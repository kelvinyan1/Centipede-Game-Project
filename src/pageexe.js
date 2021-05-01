var current_page = 1, total_page = 14;
var current_page_id = 'p1';
var x = 0;


var id = null;
function ChangePageAnimationDisapear(page_id){
    var counter = 0;
    var sum = 300;
    var elem = document.getElementById(page_id)
    
    clearInterval(id)
    id = setInterval(frame, 10);

    function frame() {
        
        if (counter == sum) {
            clearInterval(id)
        }
        else {
            counter++;
            elem.style.opacity = 1 - counter /sum;
        }
    }
}

function PaginationForward() {
    document.getElementById('paginator1').style.display = 'none';
    document.getElementById('paginator2').style.display = 'inline-block';
}

function PaginationBackward() {
    document.getElementById('paginator2').style.display = 'none';
    document.getElementById('paginator1').style.display = 'inline-block';
}

function disablePaginator() {
    document.getElementById('paginator1').style.display = 'none';
    document.getElementById('paginator2').style.display = 'none';
}

function enablePaginator(id) {
    document.getElementById(id).style.display = 'inline-block';
}

function activePagi(id) {
    document.getElementById(id).className = 'active';
}


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
        case 4:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p5').style.display='block';
        current_page_id = 'p5'
        break;
        case 5:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p6').style.display='block';
        current_page_id = 'p6'
        break;
        case 6:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p7').style.display='block';
        current_page_id = 'p7'
        break;
        case 7:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p8').style.display='block';
        current_page_id = 'p8'
        break;
        case 8:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p9').style.display='block';
        current_page_id = 'p9'
        break;
        case 9:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p10').style.display='block';
        current_page_id = 'p10'
        break;
        case 10:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p11').style.display='block';
        current_page_id = 'p11'
        break;
        case 11:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p12').style.display='block';
        current_page_id = 'p12'
        break;
        case 12:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p13').style.display='block';
        current_page_id = 'p13'
        break;
        case 13:
        document.getElementById(current_page_id).style.display='none';
        document.getElementById('p14').style.display='block';
        current_page_id = 'p14'
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




