import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function keepAlive() {
  try {
    const { error } = await supabase.from("Books").select("id").limit(1);
    if (error) {
      console.error("Keep-alive error:", error.message);
    } else {
      console.log("Supabase keep-alive successful at", new Date().toISOString());
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

keepAlive();
