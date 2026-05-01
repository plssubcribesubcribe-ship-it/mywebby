<div id="app"></div>

<script>
fetch("https://cdn.jsdelivr.net/gh/plssubcribesubcribe-ship-it/mywebby@main/index.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("app").innerHTML = html;
  });
</script>
