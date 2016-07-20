//Assumes jQuery is already loaded
function load_from_hal(id) {
    var baseUrl = "https://api.archives-ouvertes.fr/search?q=authIdHal_s:" + id;
    baseUrl += "&fl=docid,title_s,authFullName_s,conferenceTitle_s,fileMain_s,halId_s,producedDateY_i";
    $.getJSON(baseUrl, function(data) {
        var html = "";
        var curYear = 0;
        $.each(data.response.docs, function(key, val) {
            var author = "";
            var title = "";
            $.each(val.authFullName_s, function(key, val) {
                if (author != "")
                    author += ", ";
                author += val;
            });
            $.each(val.title_s, function(key, val) {
                title = val;
            });
            if (curYear != val.producedDateY_i) {
                if (curYear != 0)
                    html += "</ul>";
                curYear = val.producedDateY_i;
                html += "<h2>" + curYear + "</h2>";
                html += "<ul>";
            }
            html += '<li>';
            html += '<p><a href="https://hal.inria.fr/' + val.halId_s + '" target="_blank">';
            html += title + '</a></p>';
            html += '<p>' + author + '<br/><em>' + val.conferenceTitle_s + '</em><br/>';
            html += '<a href="' + val.fileMain_s + '" target="_blank">';
            html += '<img src="/resources/pdf.png" alt="pdf" /></a>\n';
            html += '<a href="https://hal.inria.fr/' + val.halId_s + '/bibtex" target="_blank">';
            html += '<img src="/resources/bibtex.png" alt="Bibtex" /></a>\n</p>';
            html += '</li>';
        });
        html += "</ul>";
        $("#publications-hal").html(html);
    });
}
