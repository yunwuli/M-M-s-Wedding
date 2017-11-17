$(document).ready(function () {



    // 靜態元素載入完成後，執行以下...

    // 建立initMap
    function initMap() {
        // 1.建立變數儲存地理位置 (Object)
        var myLocation = {
            lat: 24.9774556,
            lng: 121.5430134
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLocation,
            zoom: 15,
            draggable: false
        });

        var marker = new google.maps.Marker({
            map: map,
            position: myLocation
        });

    }

    // 執行initMap()
    initMap();

});