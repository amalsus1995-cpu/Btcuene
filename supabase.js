
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const supabaseUrl = "https://gpfxakuneeuafxgqbobs.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZnhha3VuZWV1YWZ4Z3Fib2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzE3ODEsImV4cCI6MjA4MTMwNzc4MX0.x2Mh3LwIg-8peEpJlif_1RcbrA-CyGa-xjtESaYKcXQ";

  window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
</script>
