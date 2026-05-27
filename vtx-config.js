// ═══════════════════════════════════════════════════════
//  VTX CONFIG GENERATOR — vtx-config.js
//  Полная база шаблонов для Betaflight CLI
// ═══════════════════════════════════════════════════════

const BANDS_5 = [
  'band 1 BOSCAM_A  A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725',
  'band 2 BOSCAM_B  B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866',
  'band 3 BOSCAM_E  E FACTORY 5705 5685 5665 5645 5885 5905 5925 5945',
  'band 4 FATSHARK  F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880',
  'band 5 RACEBAND  R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917',
];
const BANDS_5C = [
  'band 1 BOSCAM_A  A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725',
  'band 2 BOSCAM_B  B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866',
  'band 3 BOSCAM_E  E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945',
  'band 4 FATSHARK  F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880',
  'band 5 RACEBAND  R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917',
];
const BANDS_8 = [
  'band 1 BAND_A    A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725',
  'band 2 BAND_B    B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866',
  'band 3 BAND_E    E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945',
  'band 4 BAND_F    F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880',
  'band 5 BAND_R    R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917',
  'band 6 BAND_L    L CUSTOM 5362 5399 5436 5473 5510 5547 5584 5621',
  'band 7 BAND_X    X CUSTOM 4990 5020 5050 5080 5110 5140 5170 5200',
  'band 8 BAND_S    S CUSTOM 6002 6028 6054 6080 6106 6132 6158 6184',
];

// Группы шаблонов
const VTX_GROUPS = [
  {
    name: 'D1 / StingBee',
    items: [
      { id: 'd1',       label: 'D1 VTX 2.5W 64Ch (IRC Tramp)',        proto: 'IRC Tramp', bands: 8, rows: BANDS_8, pl: 5, pv: '1 14 27 30 34', plbl: 'OFF 25 500 1 2.5' },
      { id: 'stellar25',label: 'StingBee Stellar 2.5W (IRC Tramp)',    proto: 'IRC Tramp', bands: 8, rows: BANDS_8, pl: 5, pv: '1 14 27 30 34', plbl: 'OFF 25 500 1 2.5' },
    ]
  },
  {
    name: 'Rush FPV',
    items: [
      { id: 'rush5w',     label: 'Rush Tank Ultimate Plus 5W (SA 2.0)',  proto: 'SmartAudio 2.0', bands: 6, rows: [
          'band 1 BOSCAM_A  A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725',
          'band 2 BOSCAM_B  B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866',
          'band 3 BOSCAM_E  E FACTORY 5705 5685 5665 5645 5885 5905 5925 5945',
          'band 4 FATSHARK  F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880',
          'band 5 RACEBAND  R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917',
          'band 6 BAND_L    L CUSTOM  5362 5399 5436 5473 5510 5547 5584 5621',
        ], pl: 4, pv: '1 14 27 37', plbl: 'OFF 25 200 5W' },
      { id: 'rush_tank30', label: 'Rush Tank 30x30 (SA 2.0)',            proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 500 800' },
      { id: 'rush_racing',  label: 'Rush Tank Racing (SA 2.0)',           proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 3, pv: '0 1 2', plbl: '25 200 600' },
      { id: 'rush_mini',    label: 'Rush Tank Mini / Pro (SA 2.0)',        proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 800' },
      { id: 'rush_tiny',    label: 'Rush Tiny Tank (SA 2.0)',              proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 3, pv: '0 1 2', plbl: '25 100 200' },
      { id: 'rush_solo',    label: 'Rush Tank Solo 1.6W (IRC Tramp)',      proto: 'IRC Tramp',      bands: 5, rows: BANDS_5C, pl: 3, pv: '1 2 3', plbl: 'OFF 25 200' },
    ]
  },
  {
    name: 'TBS',
    items: [
      { id: 'tbs_unify_hv',   label: 'TBS Unify Pro HV (SA 2.0)',         proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 500 800' },
      { id: 'tbs_pro32hv',    label: 'TBS Unify Pro32 HV (SA 2.1)',        proto: 'SmartAudio 2.1', bands: 5, rows: BANDS_5, pl: 4, pv: '14 20 26 30', plbl: '25 100 400 1W' },
      { id: 'tbs_evo',        label: 'TBS Unify EVO (SA 2.1)',              proto: 'SmartAudio 2.1', bands: 5, rows: BANDS_5, pl: 4, pv: '14 20 26 30', plbl: '25 100 400 1W' },
      { id: 'tbs_sixty9',     label: 'TBS Sixty9 (SA 2.0)',                 proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1W' },
    ]
  },
  {
    name: 'Holybro',
    items: [
      { id: 'atlatl_hv',    label: 'Holybro Atlatl HV V2 (SA 2.0)',      proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1W' },
    ]
  },
  {
    name: 'Foxeer',
    items: [
      { id: 'foxeer_reaper', label: 'Foxeer Reaper Extreme (SA 2.0)',     proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 2.5W' },
    ]
  },
  {
    name: 'iFlight',
    items: [
      { id: 'blitz16',  label: 'iFlight Blitz 1.6W (SA 2.0)',            proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1.6W' },
    ]
  },
  {
    name: 'Eachine',
    items: [
      { id: 'eachine_nano',  label: 'Eachine Nano VTX (SA 2.0)',          proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 100 200 400' },
      { id: 'eachine_vtx03', label: 'Eachine VTX03S (SA 2.0)',            proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 400 600' },
      { id: 'eachine_tx805', label: 'Eachine TX805 (SA 2.0)',             proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 5, pv: '0 1 2 3 4', plbl: '25 200 400 800 1W' },
    ]
  },
  {
    name: 'AKK',
    items: [
      { id: 'akk_ultimate', label: 'AKK Ultimate VTX (SA 2.0)',          proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1.2W' },
    ]
  },
  {
    name: 'HappyModel',
    items: [
      { id: 'happymodel_ovx303', label: 'HappyModel OVX303 (SA 2.0)',    proto: 'SmartAudio 2.0', bands: 5, rows: [
          'band 1 BOSCAM_A  A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725',
          'band 2 BOSCAM_B  B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866',
          'band 3 BOSCAM_E  E FACTORY 5705 5685 5665 0    5885 5905 0    0',
          'band 4 FATSHARK  F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880',
          'band 5 RACEBAND  R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917',
        ], pl: 3, pv: '0 1 2', plbl: '25 100 200' },
      { id: 'diamond',  label: 'Happymodel Diamond (SA 2.0)',             proto: 'SmartAudio 2.0', bands: 5, rows: [
          'band 1 BOSCAM_A  A FACTORY 5865 5845 5825 5805 5785 5765 5745 5725',
          'band 2 BOSCAM_B  B FACTORY 5733 5752 5771 5790 5809 5828 5847 5866',
          'band 3 BOSCAM_E  E FACTORY 5705 5685 5665 0    5885 5905 0    0',
          'band 4 FATSHARK  F FACTORY 5740 5760 5780 5800 5820 5840 5860 5880',
          'band 5 RACEBAND  R FACTORY 5658 5695 5732 5769 5806 5843 5880 5917',
        ], pl: 3, pv: '0 1 2', plbl: '25 100 200' },
    ]
  },
  {
    name: 'GEPRC',
    items: [
      { id: 'geprc_rad_mini', label: 'GEPRC Rad Mini (SA 2.0)',           proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1W' },
    ]
  },
  {
    name: 'RDQ',
    items: [
      { id: 'rdq_mach3', label: 'RDQ Mach3 (SA 2.0)',                     proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1W' },
    ]
  },
  {
    name: 'SpeedyBee',
    items: [
      { id: 'speedybee_tx1600', label: 'SpeedyBee TX1600 Ultra (SA 2.0)', proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5, pl: 4, pv: '0 1 2 3', plbl: '25 200 600 1.6W' },
    ]
  },
  {
    name: 'HDZero (Цифровое)',
    items: [
      { id: 'hdzero_whoop', label: 'HDZero Whoop Lite',                   proto: 'IRC Tramp', bands: 8, rows: BANDS_8, pl: 3, pv: '1 14 27', plbl: 'OFF 25 200' },
      { id: 'hdzero_race',  label: 'HDZero Race V1/V2',                   proto: 'IRC Tramp', bands: 8, rows: BANDS_8, pl: 3, pv: '1 14 27', plbl: 'OFF 25 400' },
      { id: 'hdzero_free',  label: 'HDZero Freestyle',                    proto: 'IRC Tramp', bands: 8, rows: BANDS_8, pl: 3, pv: '1 14 27', plbl: 'OFF 25 1W' },
    ]
  },
  {
    name: 'Универсальные шаблоны',
    items: [
      { id: 'tramp_generic',  label: 'IRC Tramp — универсальный',         proto: 'IRC Tramp',      bands: 5, rows: BANDS_5C, pl: 5, pv: '25 100 200 400 600', plbl: '25 100 200 400 600' },
      { id: 'sa20_generic',   label: 'SmartAudio 2.0 — универсальный',    proto: 'SmartAudio 2.0', bands: 5, rows: BANDS_5,  pl: 4, pv: '0 1 2 3', plbl: '25 200 500 800' },
      { id: 'sa21_generic',   label: 'SmartAudio 2.1 — универсальный',    proto: 'SmartAudio 2.1', bands: 5, rows: BANDS_5,  pl: 4, pv: '14 20 26 30', plbl: '25 100 400 1W' },
      { id: 'sa10_generic',   label: 'SmartAudio 1.0 — универсальный',    proto: 'SmartAudio 1.0', bands: 5, rows: BANDS_5,  pl: 4, pv: '7 16 25 40', plbl: '25 200 500 800' },
    ]
  },
];

// Плоская карта для быстрого поиска
const VTX_MAP = {};
VTX_GROUPS.forEach(g => g.items.forEach(t => { VTX_MAP[t.id] = t; }));

// ── BUILD SELECT ──────────────────────────────────────
function buildVTXSelect() {
  const sel = document.getElementById('v-tpl');
  if (!sel) return;
  sel.innerHTML = '';
  VTX_GROUPS.forEach(g => {
    const og = document.createElement('optgroup');
    og.label = g.name;
    g.items.forEach(t => {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.label;
      og.appendChild(o);
    });
    sel.appendChild(og);
  });
}

// ── GENERATE ─────────────────────────────────────────
function genVTX() {
  const aux   = document.getElementById('v-aux').value;
  const uart  = document.getElementById('v-uart').value;
  const tplId = document.getElementById('v-tpl').value;
  const band  = document.getElementById('v-band').value;
  const ch    = document.getElementById('v-ch').value;
  const p1    = document.getElementById('v-p1').value || 2;
  const p2    = document.getElementById('v-p2').value || 3;
  const p3    = document.getElementById('v-p3').value || 5;
  const bchg  = document.getElementById('v-bchg').checked;
  const tblOn = document.getElementById('v-tbl').checked;

  const t = VTX_MAP[tplId] || VTX_MAP['d1'];
  const proto = t.proto;
  const auxIdx = {AUX1:1,AUX2:2,AUX3:3,AUX4:4,AUX5:5,AUX6:6,
                  AUX7:7,AUX8:8,AUX9:9,AUX10:10,AUX11:11,AUX12:12}[aux] || 3;

  const lines = [];

  lines.push('# serial');
  lines.push(`serial ${parseInt(uart)-1} 8192 115200 57600 0 115200`);
  lines.push('');

  if (tblOn) {
    lines.push(`# vtxtable (${t.label})`);
    lines.push(`vtxtable bands ${t.bands}`);
    lines.push('vtxtable channels 8');
    t.rows.forEach(r => lines.push('vtxtable ' + r));
    lines.push(`vtxtable powerlevels ${t.pl}`);
    lines.push(`vtxtable powervalues ${t.pv}`);
    lines.push(`vtxtable powerlabels ${t.plbl}`);
    lines.push('');
  }

  lines.push('# vtx');
  if (proto !== 'MSP') {
    lines.push(`vtx 0 ${auxIdx-1} 0 0 ${p1} 900 1100`);
    lines.push(`vtx 1 ${auxIdx-1} 0 0 ${p2} 1400 1600`);
    lines.push(`vtx 2 ${auxIdx-1} 0 0 ${p3} 1900 2100`);
    for (let i = 3; i <= 9; i++) lines.push(`vtx ${i} 0 0 0 0 900 900`);
  } else {
    for (let i = 0; i <= 9; i++) lines.push(`vtx ${i} 0 0 0 0 900 900`);
  }
  lines.push('');

  if (bchg) {
    lines.push('# band/channel switching');
    lines.push('set vtx_band_switching_enabled = ON');
    lines.push('');
  }

  lines.push('# master');
  lines.push(`set vtx_band = ${band}`);
  lines.push(`set vtx_channel = ${ch}`);
  lines.push('set vtx_power = 1');
  if (proto !== 'MSP') lines.push('set vtx_low_power_disarm = ON');
  lines.push('');
  lines.push('save');

  const codeEl = document.getElementById('v-code');
  if (codeEl) codeEl.textContent = lines.join('\n');
  const outEl = document.getElementById('v-out');
  if (outEl) {
    outEl.style.display = 'block';
    setTimeout(() => outEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
  const btn = document.getElementById('v-copy');
  if (btn) { btn.textContent = '📋 Скопировать конфиг'; btn.classList.remove('copied'); }
}

function copyVTX() {
  const code = (document.getElementById('v-code') || {}).textContent || '';
  const btn = document.getElementById('v-copy');
  const done = () => {
    if (btn) { btn.textContent = '✅ Скопировано!'; btn.classList.add('copied'); }
    setTimeout(() => { if (btn) { btn.textContent = '📋 Скопировать конфиг'; btn.classList.remove('copied'); } }, 2500);
  };
  if (navigator.clipboard) { navigator.clipboard.writeText(code).then(done); }
  else { const ta = document.createElement('textarea'); ta.value = code; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done(); }
}

// Build select on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildVTXSelect);
} else {
  buildVTXSelect();
}