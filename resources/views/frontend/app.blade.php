<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    @include('frontend.head')
    
    <body class="d-flex flex-column h-100">
        <div id="app"></div>
   </body>
   @include('frontend.foot')
    <a href="#" onclick="topFunction()" id="myBtn">
        <i class="fas fa-angle-double-right"></i>
    </a>
    <script src="{{url('js/gototop.js')}}"></script>
    <script>
    $('#sv').on('click', function(e) {
        $(".img-circle").addClass( "img-hidden");
        window.location.href = document.location.origin+'/services';
    }); 
   </script>
</html>
