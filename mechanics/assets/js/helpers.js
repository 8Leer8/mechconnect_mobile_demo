// Shared helper functions for mechanics pages (navigation, toasts, active nav)
function goDashboard(){ window.location.href = 'dashboard.html'; }
function goBookings(){ window.location.href = 'bookings.html'; }
function goTokens(){ window.location.href = 'tokens.html'; }
function goProfile(){ window.location.href = 'profile.html'; }
function goSettings(){ window.location.href = 'settings.html'; }
function goHome(){ window.location.href = 'home.html'; }
function goChat(){ alert('Chat not implemented in prototype'); }
function goWallet(){ alert('Wallet not implemented in prototype'); }
function triggerSOS(){ alert('Triggering SOS — this is a prototype.'); }

// navigate to rewards marketplace
function goMarketplace(){ window.location.href = 'marketplace.html'; }

function showMessage(message, type){
  // simple toast
  const id = 'mc-toast';
  let el = document.getElementById(id);
  if(!el){
    el = document.createElement('div');
    el.id = id;
    el.className = 'fixed left-1/2 -translate-x-1/2 bottom-24 z-50';
    document.body.appendChild(el);
  }
  el.innerHTML = `<div class="bg-white border p-3 rounded-xl shadow">${message}</div>`;
  setTimeout(()=>{ el.innerHTML = ''; }, 2500);
}

function setActiveNav(active){
  document.querySelectorAll('.mc-nav-btn').forEach(btn=>{
    const a = btn.getAttribute('data-nav');
    if(a === active) btn.classList.add('text-orange-500'); else btn.classList.remove('text-orange-500');
  });
}

// export for module systems (if loaded via bundler in future)
window.MechanicsHelpers = {
  goDashboard, goBookings, goTokens, goProfile, goSettings, goHome, showMessage, setActiveNav, triggerSOS
};
// Shared helpers for mechanic pages
function goHome(){ window.location.href = 'dashboard.html' }
function goDashboard(){ window.location.href = 'dashboard.html' }
function goBookings(){ window.location.href = 'bookings.html' }
function goTokens(){ window.location.href = 'tokens.html' }
function goProfile(){ window.location.href = 'profile.html' }
function goSettings(){ window.location.href = 'settings.html' }
function goChat(){ window.location.href = 'bookings.html' } // placeholder
function goWallet(){ window.location.href = 'tokens.html' }
function triggerSOS(){ if(confirm('Call emergency line?')){ window.location.href='tel:+639123456789' } }

function showMessage(message, type){
  const existing = document.getElementById('mc-toast');
  if(existing) existing.remove();
  const el = document.createElement('div');
  el.id = 'mc-toast';
  el.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 ${type==='success'?'bg-green-500 text-white':'bg-gray-800 text-white'}`;
  el.innerHTML = `<div class="flex items-center gap-2"><span class="material-icons-round">${type==='success'?'check_circle':'info'}</span><span>${message}</span></div>`;
  document.body.appendChild(el);
  setTimeout(()=> el.remove(), 2600);
}

// Small helper to wire bottom nav active state
function setActiveNav(active){
  document.querySelectorAll('.mc-nav-btn').forEach(btn=> btn.classList.remove('text-orange-600'));
  const el = document.querySelector(`.mc-nav-btn[data-nav="${active}"]`);
  if(el) el.classList.add('text-orange-600');
}

// Notifications (prototype)
function goNotifications(){
  alert('Notifications (prototype)');
}

// expose notifications as well (some duplicates earlier in file)
if(window.MechanicsHelpers) window.MechanicsHelpers.goNotifications = goNotifications;
