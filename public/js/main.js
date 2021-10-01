$(function(){

    if($('textarea#ta').length){
        CKEDITOR.replace('ta');
    }

    if($('textarea#ta2').length){
        CKEDITOR.replace('ta2');
    }


    $('a.confirmDeletion').on('click', ()=>{
        if(!confirm('confirmDeletion')){
            return false;
        }
    });

    if($('[data-fancybox]').length){
        $('[data-fancybox]').fancybox();

    }

});