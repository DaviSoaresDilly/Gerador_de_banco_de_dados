# backend/services/analytics.py
import pandas as pd

def calcular_taxa_mortalidade(populacao_bairro, taxa_mortalidade_cidade, populacao_cidade):
    if populacao_bairro > 0:
        return (taxa_mortalidade_cidade * (populacao_bairro / populacao_cidade))
    return 0.0
