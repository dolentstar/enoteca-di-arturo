// Lo scaffale: ogni bottiglia apre il suo cartellino.
(() => {
  const C = {
    spina: ['Il bicchiere della casa', 'Barbera superiore alla spina, a prezzi da enoteca di quartiere.', ['Ottimi vini alla spina a prezzi ragionevoli (barbera superiore fantastico)', 'Gabriele R.']],
    bottiglie: ['Vini in bottiglia', 'Rossi, bianchi e piemontesi da scegliere con Luca: si beve qui o si porta a casa.', ['Vino buonissimo e vastissima scelta.', 'Veronica V.']],
    grappe: ['Grappe', 'Grappe da fine serata, da assaggiare al banco o da portare a casa.', null],
    birre: ['Birre', 'Artigianali e d\'importazione, anche per chi il vino lo lascia agli altri.', ['Una vasta varietà di vini e birre di importazione con abbondanti taglieri.', 'Adriano F.']],
    distillati: ['Distillati e liquori', 'Distillati e liquori di ogni genere e provenienza: chiedete a Luca cosa c\'è sullo scaffale.', null],
    spritz: ['Spritz', 'Per chi all\'aperitivo vuole il classico.', null],
    arturo: ['Arturo', 'Il pastore tedesco di casa. Più pelo che ringhio.', ['Torneremo sicuramente perché c\'è Arturo!', 'Rocco']]
  };
  const box = document.getElementById('cartellino');
  const [t, x, q] = box.children;
  document.querySelectorAll('.b').forEach(b => b.addEventListener('click', () => {
    const d = C[b.dataset.k];
    document.querySelectorAll('.b.scelta').forEach(e => e.classList.remove('scelta'));
    b.classList.add('scelta');
    t.textContent = d[0]; x.textContent = d[1];
    if (d[2]) { q.hidden = false; q.innerHTML = `"${d[2][0]}" <span>${d[2][1]}</span>`; } else q.hidden = true;
    box.classList.remove('nuovo'); void box.offsetWidth; box.classList.add('nuovo');
  }));
})();
