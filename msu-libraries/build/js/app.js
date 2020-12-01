/*
|==========================================================================
| app.js
|==========================================================================
*/
jQuery(function($) {



    
    /** -------------------------------------------------------------- */
    /**
     * 	Add icon for external links
     */
    
    $('a')
        .each(function(){
            if( location.hostname === this.hostname || !this.hostname.length ) 
                $(this).addClass('local');
            else
                $(this).addClass('external');
        });
    
    $('#mobile-menu .navbar-nav li:not(.msstate-links-mobile) a.external, #main-menu .navbar-nav li a.external, .msu-sidebar .nav li a.external, a.btn.external:not(.btn-search, .btn-mystate)')
        .each(function(){
            $(this).append(' <span class="fas fa-external-link-alt font-size-60 ml-2"></span>');
        });
    
    $('a.card.external')
        .each(function(){
            $(this).find('.card-body').append('<div class="font-size-80 text-white opacity-80 text-shadow position-absolute" style="top: 10px; right: 10px;"><span class="fas fa-external-link-alt"></span></div>');
        });
    
    $('a.list-group-item.external')
        .each(function(){
            $(this).append('<div class="font-size-80 opacity-50 position-absolute" style="top: 10px; right: 10px;"><span class="fas fa-external-link-alt"></span></div>');
        });
    
    
    
        
    
    
    /** -------------------------------------------------------------- */
    /**
     * 	Make tables boostrap friendly
     */
    
    $('table')
        .each(function() {
    
            if ( ! $(this).hasClass('table'))
                $(this).addClass('table');
    
            if ( ! $(this).parent('.table-responsive').length)
                $(this).wrap('<div class="table-responsive"></div>');
    
        });
    
    
    
    
    
    /** -------------------------------------------------------------- */
    /**
     * 	Use to show tooltips
     * 	
     * 	- On by default. Needed for concentration links.
     */
    
    $('[data-toggle="tooltip"]').tooltip();
    
    
    
    
        
    /** -------------------------------------------------------------- */
    /**
     * 	Animate Scroll to Anchor
     */
    
    $('a.anchor-scroll')
        .on('click', function() {
    
            var href = $(this).attr('href');
            href = href.split('#');
            var hash = href[1];
            if (typeof hash != 'undefined') hash = hash.replace('#','');
    
            if (href[0].indexOf('//') === -1 && hash != null)
            {
                $('html,body').animate({ scrollTop : $('#' + hash + ', a[name=' + hash + ']').offset().top }, 500 );
                return false;
            }
    
        });
    
    
    $(window)
        .on('load', function() {
    
            var hash = location.hash.replace('#',''); // remove the # from the hash, as different browsers may or may not include it
            if (hash != '')
                $('html, body').animate({ scrollTop : $('#' + hash + ', a[name=' + hash + ']').offset().top }, 500);
    
        });  
        
        
    
    
    
    
        
    /** -------------------------------------------------------------- */
    /**
     * 	Iframe Resizer
     */  
    
    /*
    $('.iframe-resize').iFrameResize({ 
        log : true,
        checkOrigin: [
          'https://cas.its.msstate.edu',
          'https://w.msstate.edu',
          'https://ssl3.msstate.edu',
          'https://www.ecommerce.msstate.edu'
        ] 
    });
    */
        
        
    
    
    
        
    /** -------------------------------------------------------------- */
    /**
     * 	Check Alt Text
     */
     
    $('img')
        .each(function() {
    
            /**
             * 	Set Action
             *
             * 	Note: For large 'live' sites, I recommend console. For everything else replace is probably fine. Definitions below.
             *  
             *  Options: replace, subtle, console
             *   - Replace: Hides/replaces image with a large red box. Also prints to console.
             *   - Subtle: Changes image opacity to 50%. Also prints to console.
             *   - Console: Prints to console only.
             */ 
            var dothis = 'replace';
    
            var img_alt = $(this).attr('alt');
            if (!img_alt || img_alt == '') 
            {
    
                if (dothis == 'replace')
                {
                    var img_class;
                    var img_style;
                    var html_warning;
    
                    img_alt = "This image does not contain alternative text.";
    
                    $(this).wrap('<div class="img-no-alt processing" style="position: relative;"></div>');
    
                    img_class = $(this).attr('class');
                    if (typeof img_class !== typeof undefined && img_class !== false)
                        img_class = $(this).attr('class');
                    else
                        img_class = '';
    
                    img_style = $(this).attr('style');
                    if (typeof img_style !== typeof undefined && img_style !== false)
                        img_style = $(this).attr('style') + ' position: relative;';
                    else
                        img_style = 'position: relative;';
    
                    $(this).removeClass().attr('style', 'opacity: 0; position: relative; z-index: 0;');
                    
                    $(this).attr('alt', img_alt);
                    
                    html_warning = 		'<div style="display: block; position: absolute; z-index: 999; top: 0; left; 0; width: 100%; height: 100%; padding: 10%; overflow: hidden; background: #a90707; color: #fff; text-align: center; font-size: 150%; font-weight: bold;">';
                    html_warning += 		'<span>'+img_alt+'</span>';
                    html_warning += 	'</div>';
                    $(this).parents('.img-no-alt.processing').append(html_warning);
    
                    $(this).parents('.img-no-alt.processing').addClass(img_class).attr('style', img_style); 
                    $(this).parents('.img-no-alt.processing').removeClass('processing');
    
                    console.log('WANRING! "'+$(this).attr('src')+'" does not contain alt text.');
                }
                
    
                if (dothis == 'subtle')
                {
                    img_alt = "This image does not contain alternative text.";
    
                    $(this).attr('style', 'opacity: .5;');
                    $(this).attr('alt', img_alt);
                    console.log('WANRING! "'+$(this).attr('src')+'" does not contain alt text.');
                }
                
    
                if (dothis == 'console')
                {
                    img_alt = "This image does not contain alternative text.";
    
                    $(this).attr('alt', img_alt);
                    console.log('WANRING! "'+$(this).attr('src')+'" does not contain alt text.');
                }
    
            }
        
        });
    
    
    
    
    
    
    /** -------------------------------------------------------------- */
    /**
     * 	Function: function_name()
     */
    
    
    
    
    
        
    
    
    });
    
    