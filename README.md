# Pair programming

```
Il pair programming nel ciclo di feedback permette di ottenere feedback sul proprio operato nel termine dei 5 minuti.
```

Allo standup meeting si formano le coppie di pair programming

Tecnica di feedback rapido tra 2 dev

- Driver: scrive codice
- Navigator: Controlla il codice scritto dal Driver

## Parte organizzativa

- Planning settimanale
- Standup (1g)
- Pair programming (10 min)
- Unit test (1min)


## Pro
- Navigator si occupa di strategia, il driver di scrivere codice 
- 4 occhi sono meglio di 2 
- Design migliore all'interno del codice /
- Crescita personale migliore, perchè c'è knoledge sharing 
- Il codice che scrivete è più condivisibile

## Contro

- Costa di più, ma solitamente l'azienda è solitamente disposta a spenderli
- Conflitti di ego, non tutti sono fatti per fare pair programming
- Eccessiva specializzazione

# Unit test

```
Metodo per verificare unita isolate di codice
```

- Permette di ottenere codice robusto in modo sostenibile.
- Lo unit test è la base del mio ciclo di feedback (mi da feedback nel giro di un minuto).
- Se non riesco a scrivere il test in un minuto, probabilmente ho scritto codice non       testabile.
- Unit test è fatto dai programmatori per i programmatori
- Marcate i test funzionali che contengono i behavior che interessano al product owner


# Code refactoring  

```
Migliorare il codice senza cambiarne il comportamento.
```
Il 70% del costo del software è manutenzione.

E' un invenzione di SCRUM, allo standup si pianifica una review del codice.

 Refactoring, improving the design of existing code - Martin Folwer

- KISS : Keep it simple stupid
- YAGNI: You aren't gonna need it;

[https://github.com/emilybache/Tennis-Refactoring-Kata](https://github.com/emilybache/Tennis-Refactoring-Kata)

# SCRUM

```
E' un metodo organizzativo per la produzione software.
```

Essendo un lavoro intelletuale è difficile fare una stima.

- Sprint: la dimensione dello sprint varia da una settimana a due settimane. Con lo sprint contengo il tempo di sviluppo

(Vedi scheda in allegato)

# TDD ( Test driven development)


```
E' una pratica di scrittura codice
```

Deriva dal test first. Prima di scrivere qualsiasi parte di programma scrivi prima il test.

Il test deve fallire esattamente come dico io.

- Scrivo il test
- Scrivo il codice più piccolo che risolva quel test

# User stories

- Who? (Chi è l'utente? Che tipo di persona e'?)
- What? (Cosa vuole fare?)
- Why? (Perchè lo vuole fare?)

Regola delle 3C:
- Carta
- Conversation
- Confirmation

INVEST:

- Indipendente;
- Negoziabile;
- Valueable
- Stimabile;
- Small;
- Testable;

(Vedi scheda allegata)

# SOLID 


- Single Responsibility Principle: Every class should have responsibility over a single part of the functionality provided by the software. and that responsibility should be entirely encapsulated by the class

- Open-closed principle: Software entities, should be open for extension, but closed for modification. That is, such an entity can allow its behavior to be extended without modifying its source code

- Liskov substitution priciple: All the derived classes must honour all the contracts (public interfaces) defined by the base class

....

# Continuos Integration

Tecnica di XP. 
GitLab ha la CI per proetti personali.

```
Tecnica di extreme programming che permette di controllare tutto il processo da la scrittura del codice fino al deploy

- Continuos building
- Continuos testing
- Continuos deploying
```

Cosa da valore al mio cliente?

# Value stream mapping

```
Il modo in cui i giapponesi ottimmizzano la loro catena produttiva
```

I giapponesi prendono un processo di produione e lo mettono nero su bianco, e poi cercano i punti di ottimizzazione.


- Il PO ha un idea
- Crea una request
- BA fa analisi
- Crea US
- Il team di sviluppo sviluppa


In questo processo dove sono gli sprechi?
La continuos integration si occupa di effettuare questa sequenza più velocemente



# Referenze

Mitico mese uomo -> Definisce l'ingegneria del software

Il software non è il prodotto ma il progetto

[https://scrumguides.org](https://scrumguides.org)

Garmish Conference



