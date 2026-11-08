
const ICONS={
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  chevron:'<path d="m9 5 7 7-7 7"/>',
  refresh:'<path d="M3 10a9 9 0 1 1 1 8M3 4v6h6"/>',
  wallet:'<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 8V5a2 2 0 0 1 2-2h12v2m0 8h4m-5 0h.01"/>',
  team:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 5a5 5 0 0 1 3 5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  calculator:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v3H8zM8 13h1m6 0h1m-8 4h1m6 0h1"/>',
  clipboard:'<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6m-6 4h6m-6 3h4"/>',
  tag:'<path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="7.5" cy="7.5" r="1"/>',
  chart:'<path d="M4 3v18h17M8 17v-5m5 5V7m5 10V4"/>',
  settings:'<path d="m9 3 1-1h4l1 3 3 1 3-1 2 4-2 2v3l1 2-2 4-3-1-3 2-1 2H9l-1-3-3-1-2 1-2-4 2-2v-3L1 9l2-4 3 1z" transform="translate(1 0) scale(.92)"/><circle cx="12" cy="12" r="3"/>',
  wrench:'<path d="M21 3a6 6 0 0 1-8 8L5 20a2.1 2.1 0 0 1-3-3l9-8a6 6 0 0 1 8-8l-4 4 4 2z"/><path d="m4 18 1-1"/>',
  car:'<path d="m5 8 2-5h10l2 5M3 17v3h3v-3m12 0v3h3v-3M2 10l2-2h16l2 2v7H2zM7 13H4m16 0h-3M8 8h8"/>',
  engine:'<path d="M6 7h11l3 4h2v7h-4l-2 3H6l-3-4v-7h3zM9 3h5m-3 0v4M1 12v5m2-3H1m7-3h6l3 4H8z"/>',
  wheel:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="1.5"/><path d="m12 10.5-2-5m3 5 4-3m-4 5.5 5 2m-6 0-1 4m-1-6-5 1"/>',
  drive:'<path d="M8 5h8M8 19h8M12 5v14"/><rect x="4" y="2" width="4" height="6" rx="1"/><rect x="16" y="2" width="4" height="6" rx="1"/><rect x="4" y="16" width="4" height="6" rx="1"/><rect x="16" y="16" width="4" height="6" rx="1"/><path d="m9 12 3-3 3 3-3 3z"/>',
  gauge:'<path d="M4 19a10 10 0 1 1 16 0zM12 4v2M5 8l2 1m12-1-2 1M3 14h2m14 0h2m-9 2 5-7"/><circle cx="12" cy="16" r="1.5"/>',
  smoke:'<path d="M3 19h18M5 15c-4-5 5-3 2-8M12 16c-5-5 6-5 2-12M18 16c-3-3 4-4 3-8"/>',
  paint:'<path d="M7 7h9v14H7zM9 3h5v4m-5-4V1h7m0 4h4m-1 3h2M7 12h9m-9 5h9"/>',
  sparkles:'<path d="m10 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 2v4m-2-2h4M20 16v6m-3-3h6"/>',
  brake:'<circle cx="11" cy="12" r="9"/><circle cx="11" cy="12" r="3"/><path d="M17 5h4v9l-4 2zM7 7h.01m-2 5h.01m2 5h.01m6 2h.01M11 5h.01"/>',
  turbo:'<path d="M20 12a8 8 0 1 1-8-8h8V1h3v6H12a5 5 0 1 0 5 5z"/><circle cx="12" cy="12" r="2"/><path d="m10 10-2-2m6 2 2-2m-2 6 2 2m-6-2-2 2"/>',
  kit:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V3h8v4M2 12h20m-12-2v5h4v-5"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M5 16H3V3h13v2"/>',
  shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12l3 3 5-6"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 4v3"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1-1.5 3m0 3h.01"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  reset:'<path d="M3 10a9 9 0 1 1 1 8M3 4v6h6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff:'<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.7A17 17 0 0 0 2 12s3.6 7 10 7a9.700 9.700 0 0 0 4-.9M9.900 9.900a3 3 0 0 0 4.200 4.200"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  alert:'<path d="M12 3 2 20h20L12 3ZM12 10v4.500M12 17.500h.01"/>',
  moon:'<path d="M19 15.500A8 8 0 0 1 8.500 5a8 8 0 1 0 10.500 10.500Z"/><path d="M17 3v4m-2-2h4m1 4v2m-1-1h2"/>',
  pumpkin:'<path d="M12 8c-5 0-9 2.600-9 6.200S7 20.500 12 20.500s9-2.700 9-6.300S17 8 12 8Z"/><path d="M12 8c-2.600 1.400-3.800 3.900-3.800 6.200s1.200 4.700 3.800 6.300M12 8c2.600 1.400 3.800 3.900 3.800 6.200s-1.200 4.700-3.800 6.300"/><path d="M12 8V4.500M12 4.500c1 0 2.100-.6 2.700-1.600"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"/>',
  grip:'<g fill="currentColor" stroke="none"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></g>',
  chevronup:'<path d="m6 15 6-6 6 6"/>',
  chevrondown:'<path d="m6 9 6 6 6-6"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  receipt:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 8h6M9 12h6"/>'
};
export const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||ICONS.wrench}</svg>`;
export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// En móvil las tablas se apilan como tarjetas: cada celda lleva como etiqueta el encabezado de su columna.
export const labelTables=root=>{
  for(const table of root.querySelectorAll('table')){
    const heads=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim());
    if(!heads.length)continue;
    for(const row of table.querySelectorAll('tbody tr')){
      [...row.children].forEach((cell,i)=>{if(i>0&&!cell.dataset.label&&heads[i]&&cell.colSpan===1)cell.dataset.label=heads[i];});
    }
  }
};
