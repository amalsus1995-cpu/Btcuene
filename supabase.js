
window.supabaseClient = (function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  document.head.appendChild(script);

  return new Promise((resolve) => {
    script.onload = () => {
      const supabaseUrl = "https://gpfxakuneeuafxgqbobs.supabase.co";
      const supabaseKey = "PUT_YOUR_ANON_KEY_HERE";
      const client = window.supabase.createClient(supabaseUrl, supabaseKey);
      resolve(client);
    };
  });
})();
