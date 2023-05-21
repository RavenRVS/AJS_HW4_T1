import healthLevel from '../app';

test.each([
  ['healthy', { name: 'Маг', health: 80 }, 'healthy'],
  ['wounded', { name: 'Маг', health: 45 }, 'wounded'],
  ['critical', { name: 'Маг', health: 10 }, 'critical'],
])(
  ('should return %s level for %s object'),
  (level, persObj, expected) => {
    const result = healthLevel(persObj);

    expect(result).toBe(expected);
  },
);
