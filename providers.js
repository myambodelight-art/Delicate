// Edit this file to change payment details. Used by dashboard.html AND selfservice.html.
// Leave a field empty ('' or []) if that provider does not offer it.
window.PROVIDERS = {
  delight: {
    name: 'Delight Myambo',
    whatsapp: '263780197527',
    ecocash: '0780197527',
    innbucks: '0780197527',
    banks: [
      { label: 'NMB ZWG', acc: '86460273101001' },
      { label: 'NMB USD', acc: '86096363102001' }
    ]
  },
  tichaona: {
    name: 'Tichaona Mombe',
    whatsapp: '263788027970',
    ecocash: '0788027970',
    innbucks: '0788027970',
    banks: []                // no bank details
  },
  tendai: {
    name: 'Tendai Hendrick Chingaya',
    whatsapp: '263774783388',
    ecocash: '0774783388',
    innbucks: '0774783388',
    banks: []
  }
};
