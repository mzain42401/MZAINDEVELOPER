var min = '00';
        var sec = '00';
        var msec = '00';
        var minn = document.getElementById('min')
        var secc = document.getElementById('sec')
        var milii = document.getElementById('mili')
        var interval;

        function timer() {
            msec++
            milii.innerHTML = msec;
            if (msec >= 100) {
                sec++
                secc.innerHTML = sec;
                msec = 00
            }
            else if (sec >= 60) {
                min++
                minn.innerHTML = min;
                sec = 00;

            }

        }
        var k = false
        function start() {
            interval = setInterval(timer, 10)
            k = true
            if (k = true) {
                document.getElementById("dd").disabled = true
            }
        }

        function stop() {
            clearInterval(interval)
            k = false
            document.getElementById("dd").disabled = false
            // document.write(`<h1>wellcome To</h1><h1><b>MZ DEVELOPER</b></h1><h1>Stop Watch Record</h1>  your time is   ${min}    minutes ,   ${sec}   second ,  ${msec}   millisecond .`)

        }
        function reset() {
            min = '00 ';
            sec = '00 ';
            msec = '00';
            minn.innerHTML = min;
            secc.innerHTML = sec;
            milii.innerHTML = msec;
            clearInterval(interval)
            k = false
            document.getElementById("dd").disabled = false
        }


        //  <!-- object==================================================================== -->






