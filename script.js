document.getElementById('suhuForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const celsius = parseFloat(document.getElementById('celsius').value);
    
    if (isNaN(celsius)) {
        alert('Masukkan angka yang valid!');
        return;
    }
    
    
    const fahrenheit = (celsius * 9/5) + 32;
    const reamur = celsius * 4/5;
    const kelvin = celsius + 273.15;
    
    
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2) + ' °F';
    document.getElementById('reamur').textContent = reamur.toFixed(2) + ' °R';
    document.getElementById('kelvin').textContent = kelvin.toFixed(2) + ' K';   
});