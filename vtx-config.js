const VTX_TABLES = {
  d1: {
    bands:8, channels:8,
    rows:[
      'band 1 BAND_A   A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880',
      'band 5 BAND_R   R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917',
      'band 6 BAND_L   L CUSTOM 5362 5399 5436 5473 5510 5547 5584 5621',
      'band 7 BAND_X   X CUSTOM 4990 5020 5050 5080 5110 5140 5170 5200',
      'band 8 BAND_S   S CUSTOM 6002 6028 6054 6080 6106 6132 6158 6184',
    ],
    powerlevels:5, powervalues:'1 14 27 30 34', powerlabels:'OFF 25 500 1 2.5',
  },
  ru5w: {
    bands:6, channels:8,
    rows:[
      'band 1 BAND_A   A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880',
      'band 5 BAND_R   R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917',
      'band 6 BAND_L   L CUSTOM 5362 5399 5436 5473 5510 5547 5584 5621',
    ],
    powerlevels:4, powervalues:'1 14 27 37', powerlabels:'OFF 25 200 5W',
  },
  tbs: {
    bands:4, channels:8,
    rows:[
      'band 1 BAND_A   A RACING 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B RACING 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E RACING 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F RACING 5740 5760 5780 5800 5820 5840 5860 5880',
    ],
    powerlevels:4, powervalues:'0 1 2 3', powerlabels:'25 200 600 1W',
  },
  pro32hv: {
    bands:4, channels:8,
    rows:[
      'band 1 BAND_A   A RACING 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B RACING 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E RACING 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F RACING 5740 5760 5780 5800 5820 5840 5860 5880',
    ],
    powerlevels:4, powervalues:'0 1 2 3', powerlabels:'25 200 600 1W',
  },
  sixty9: {
    bands:4, channels:8,
    rows:[
      'band 1 BAND_A   A RACING 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B RACING 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E RACING 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F RACING 5740 5760 5780 5800 5820 5840 5860 5880',
    ],
    powerlevels:4, powervalues:'0 1 2 3', powerlabels:'25 200 600 1W',
  },
  tank: {
    bands:5, channels:8,
    rows:[
      'band 1 BAND_A   A CUSTOM 5865 5845 5825 5805 5785 5765 5745 5725',
      'band 2 BAND_B   B CUSTOM 5733 5752 5771 5790 5809 5828 5847 5866',
      'band 3 BAND_E   E CUSTOM 5705 5685 5665 5645 5885 5905 5925 5945',
      'band 4 BAND_F   F CUSTOM 5740 5760 5780 5800 5820 5840 5860 5880',
      'band 5 BAND_R   R CUSTOM 5658 5695 5732 5769 5806 5843 5880 5917',
    ],
    powerlevels:3, powervalues:'1 2 3', powerlabels:'OFF 25 200',
  },
};
function genVTX() {
  const aux   = document.getElementById('v-aux').value;
  const proto = document.getElementById('v-proto').value;
  const uart  = document.getElementById('v-uart').value;
  const tpl   = document.getElementById('v-tpl').value;
  const band  = document.getElementById('v-band').value;
  const ch    = document.getElementById('v-ch').value;
  const p1    = document.getElementById('v-p1').value || 2;
  const p2    = document.getElementById('v-p2').value || 3;
  const p3    = document.getElementById('v-p3').value || 5;
  const bchg  = document.getElementById('v-bchg').checked;
  const tblOn = document.getElementById('v-tbl').checked;
  const t     = VTX_TABLES[tpl] || VTX_TABLES.d1;
  const auxIdx = {AUX1:1,AUX2:2,AUX3:3,AUX4:4,AUX5:5,AUX6:6,AUX7:7,AUX8:8,AUX9:9,AUX10:10,AUX11:11,AUX12:12}[aux] || 3;
  const tplName = document.getElementById('v-tpl').options[document.getElementById('v-tpl').selectedIndex].text;
  let lines = [];
  lines.push('# serial');
  lines.push(`serial ${parseInt(uart)-1} 8192 115200 57600 0 115200`);
  lines.push('');
  if (tblOn) {
    lines.push(`# vtxtable (${tplName})`);
    lines.push(`vtxtable bands ${t.bands}`);
    lines.push(`vtxtable channels ${t.channels}`);
    t.rows.forEach(r => lines.push('vtxtable ' + r));
    lines.push(`vtxtable powerlevels ${t.powerlevels}`);
    lines.push(`vtxtable powervalues ${t.powervalues}`);
    lines.push(`vtxtable powerlabels ${t.powerlabels}`);
    lines.push('');
  }
  lines.push('# vtx');
  if (proto === 'IRC Tramp' || proto === 'TBS SmartAudio') {
    lines.push(`vtx 0 ${auxIdx-1} 0 0 ${p1} 900 1100`);
    lines.push(`vtx 1 ${auxIdx-1} 0 0 ${p2} 1400 1600`);
    lines.push(`vtx 2 ${auxIdx-1} 0 0 ${p3} 1900 2100`);
    for (let i = 3; i <= 9; i++) lines.push(`vtx ${i} 0 0 0 0 900 900`);
  } else {
    for (let i = 0; i <= 9; i++) lines.push(`vtx ${i} 0 0 0 0 900 900`);
  }
  lines.push('');
  if (bchg) { lines.push('# band/channel switching'); lines.push('set vtx_band_switching_enabled = ON'); lines.push(''); }
  lines.push('# master');
  lines.push(`set vtx_band = ${band}`);
  lines.push(`set vtx_channel = ${ch}`);
  lines.push('set vtx_power = 1');
  if (proto !== 'MSP') lines.push('set vtx_low_power_disarm = ON');
  lines.push('');
  lines.push('save');
  document.getElementById('v-code').textContent = lines.join('\n');
  document.getElementById('v-out').style.display = 'block';
  const btn = document.getElementById('v-copy');
  btn.textContent = 'Скопировать конфиг';
  btn.classList.remove('copied');
  setTimeout(() => document.getElementById('v-out').scrollIntoView({behavior:'smooth',block:'nearest'}), 50);
}
function copyVTX() {
  const code = document.getElementById('v-code').textContent;
  const btn = document.getElementById('v-copy');
  const done = () => {
    btn.textContent = 'Скопировано';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Скопировать конфиг'; btn.classList.remove('copied'); }, 2500);
  };
  if (navigator.clipboard) { navigator.clipboard.writeText(code).then(done); }
  else { const ta = document.createElement('textarea'); ta.value = code; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done(); }
}