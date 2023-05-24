!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);
    js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
    // !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
    function showforcast(days){
    let widgets = [document.getElementById('days_1'),document.getElementById('days_3'),document.getElementById('days_7')];
    for(let i = 0; i<widgets.length; ++i ){
        widgets[i].style.visibility = 'hidden';
        widgets[i].style.height = 0;
    }
    let el_vis = document.getElementById('days_'+days);
    el_vis.style.visibility = 'visible';
    }
    showforcast(1);
    

   