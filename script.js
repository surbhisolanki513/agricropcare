document.getElementById('loginBtn').addEventListener('click', function () {
    // ઈનપુટ માંથી ડેટા મેળવો
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // સાચા આઈડી અને પાસવર્ડ (તમે અહીંથી બદલી શકો છો)
    const correctEmail = "agricropwl@outlook.com";
    const correctPassword = "123";

    // લોગિન ચેક કરવાની શરત
    if (emailInput === correctEmail && passwordInput === correctPassword) {
        alert("લોગિન સફળ! સ્વાગત છે.");
        window.location.href = "dashboard.html"; // ડેશબોર્ડ પેજ પર લઈ જશે
    } else {
        // જો વિગત ખોટી હોય તો
        alert("ખોટો ઈમેઈલ અથવા પાસવર્ડ!\n\nસાચો ઈમેઈલ: agricropwl@outlook.com\nપાસવર્ડ: 123");
    }
});

// જો યુઝર Enter કી દબાવે તો પણ લોગિન થઈ જાય તે માટે
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('loginBtn').click();
    }
});