
$(document).ready(function() {
//Плавно прокручивает страницу до id-ка
//Ссылка должна быть с id на якорь и классом prokrutkaslide.
$('.prokrutkaslide').click(function(){
var el = $(this).attr('href');
el = el.replace(/[^\#]*/, ''); //вытаскиваем id из ссылки
$('body,html').animate({
scrollTop: $(el).offset().top}, 1000);
return false;
});
});
