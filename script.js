
document.getElementById('profilePhoto').addEventListener('change', function(event) {
    alert("Profile photo selected: " + event.target.files[0].name);
});
