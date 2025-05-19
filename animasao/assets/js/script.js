console.log('funciona');





        $(document).ready(function() {
            // Agrega funcionalidad al botón usando jQuery
            $("#botonMinecraft").click(function() {
                // Oculta la sección de inicio
                $(".inicio").hide();
                // Muestra la sección de animaciones
                $(".animaciones").show();
                $("body").css("background-image", "url('assets/img/fondo2.jpg')");
                $("body").css("background-size", "cover");
                $("body").css("background-position", "center");
                $("body").css("background-repeat", "no-repeat");
            });


                $("#moverSteve").click(function() {
                $("#elementoAnimado").animate({
                    left: '300px',
                    top: '200px'
                }, 1000, function(){
                    $("#zombieElement").hide();
                }
            );
            });

            let audioReproducido = false;
            let audio = new Audio('assets/audio/abeja-cortado.mp3');
            audio.preload = 'auto';

            let explosionAudio = new Audio('assets/audio/creeper.mp3'); 
            explosionAudio.preload = 'auto';


            $("#abejas").click(function() {
                    if (!audioReproducido) {
                        audio.play();
                        audioReproducido = true;
                    }
                //Muestra la abeja
                $("#abeja").show().animate({
                    right: '300px',
                    bottom: '200px'
                }, 2000, function() {
                    // Se esconde
                    $("#abeja").animate({
                        right: '300px',
                        bottom: '200px'
                    }, 1000, function() {
                        $(this).hide();
                        audioReproducido = false;
                    });
                });
            });
            
            $("#creeperButton").click(function() {
                // Precarga el audio 
                explosionAudio.load();
                $("#creeper").show();
                // Determina la posición actual de Steve
                let steveLeft = $("#elementoAnimado").position().left;
                let steveTop = $("#elementoAnimado").position().top;

                // Animacion del creeper
                $("#creeper").animate({
                    left: steveLeft,
                    top: steveTop   // Esto es para que vaya a cualquiera de las posiciones que este steve
                }, 2000, function() {
                    // Muestra la explosión
                    $(".explosion").css({
                        left: steveLeft, 
                        top: steveTop
                    }).show();

                    // Reproduce el sonido de explosión
                    explosionAudio.play();

                    // Muestra la pantalla de muerte
                    explosionAudio.addEventListener('ended', function() {
                        $("#pantallaMuerte").fadeIn(1000);
                         // Oculta el creeper
                        setTimeout(function() {
                            $("#creeper").hide();
                            $(".explosion").hide();
                        }, 1000);
                    });


                });
            });

            $("#reiniciar").click(function() {
                // Recarga la página
                location.reload();
            });
            });

