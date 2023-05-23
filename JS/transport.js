//Chris helped make this beofre and i reused it 
//  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);
// js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
// let cards = [document.getElementById('top_1'),document.getElementById('top_3'),document.getElementById('top_6')];
// cards[1].style.visibility = 'hidden';
// cards[3].style.visibility = 'hidden';
// cards[6].style.visibility = 'hidden';

    let cards = [document.getElementById('top_3'),document.getElementById('top_6')];

    for(let i = 0; i<cards.length; ++i ){
        cards[i].style.visibility = 'hidden';

    }

    function topTransportations(top){
    let el_vis = document.getElementById('top_'+top);
    el_vis.style.visibility = 'visible';
    }
    
    topTransportations(1);



    // function topTransportations(top){
    //     let cards = [document.getElementById('top_1'),document.getElementById('top_3'),document.getElementById('top_6')];
    //     for(let i = 0; i<cards.length; ++i ){
    //         cards[i].setAttribute('style', 'visibility: hidden;');
    
    
    //     }
    //     let el_vis = document.getElementById('top_'+top);
    //     el_vis.style.setAttribute('style', 'visibility: visible;');
    //     }
       