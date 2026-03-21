import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sjrxvjpqrbwnbxeeyqvl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcnh2anBxcmJ3bmJ4ZWV5cXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMjAwMjQsImV4cCI6MjA4OTY5NjAyNH0.ngdV0b4Ivc-BGSoPwvkuvKOPO5bxxEGWLpXl8DB3Wu8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
