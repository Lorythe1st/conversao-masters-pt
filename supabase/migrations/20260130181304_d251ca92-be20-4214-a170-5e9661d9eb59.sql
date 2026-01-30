-- Tabela para guardar todos os pedidos de análise gratuita
CREATE TABLE public.audit_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  instagram TEXT NOT NULL,
  facebook TEXT NOT NULL,
  email TEXT NOT NULL,
  email_sent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Ativar RLS
ALTER TABLE public.audit_requests ENABLE ROW LEVEL SECURITY;

-- Permitir inserção pública (formulário sem login)
CREATE POLICY "Allow public insert" 
ON public.audit_requests 
FOR INSERT 
WITH CHECK (true);

-- Bloquear leitura direta (proteção de dados pessoais)
CREATE POLICY "No public read" 
ON public.audit_requests 
FOR SELECT 
USING (false);