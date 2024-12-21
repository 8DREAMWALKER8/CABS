$(document).ready(function() {
    // FullCalendar yapılandırması
    $('#calendar').fullCalendar({
        locale: 'tr', // Türkçe dil desteği
        selectable: true,
        select: function(start, end) {
            // Takvimden seçilen tarihi al
            var selectedDate = start.format('YYYY-MM-DD');
            $('#datetime').html('Tarih: ' + selectedDate);

            // Seçilen tarihi saatle birleştirmek için hazır
            var selectedTime = $('#timepicker').val();
            if (selectedTime) {
                $('#datetime').html('Tarih: ' + selectedDate + ', Saat: ' + selectedTime);
            }

            console.log('Seçilen Tarih: ' + selectedDate);
            console.log('Seçilen Saat: ' + selectedTime);
            
            // Takvimdeki seçimi temizle
            $('#calendar').fullCalendar('unselect');
        }
    });

    // jQuery Timepicker yapılandırması
    $('#timepicker').timepicker({
        timeFormat: 'HH:mm', // Saat formatı
        interval: 30, // 30 dakikalık aralıklarla seçilebilir
        minTime: '08:00', // En erken saat
        maxTime: '20:00', // En geç saat
        defaultTime: '09:00', // Varsayılan saat
        startTime: '08:00', // Başlangıç saati
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    // Saat değiştiğinde tarih ve saat bilgilerini güncelle
    $('#timepicker').on('change', function() {
        var selectedDate = $('#calendar').fullCalendar('getDate').format('YYYY-MM-DD');
        var selectedTime = $(this).val();
        if (selectedDate && selectedTime) {
            $('#datetime').html('Tarih: ' + selectedDate + ', Saat: ' + selectedTime);
        }
    });
});