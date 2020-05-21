import events from './events';

describe('topics', () => {
  test('CreatedAccount', () => {
    expect(
      events.isCreatedAccount('0x61d79c39ec9df561d2bc7269fb2dbf24d08ced4ab344c4c03b6aaf70d4f09df2'),
    ).toBeTruthy();

    const [uid, address] = events.decodeCreatedAccount(
      '0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000016db25945a4262529874c6eef460e0c4b55618fd000000000000000000000000000000000000000000000000000000000000002438663264646338342d653964382d343266392d626239372d32383935373165316236343800000000000000000000000000000000000000000000000000000000',
    );

    expect(uid).toBe('8f2ddc84-e9d8-42f9-bb97-289571e1b648');
    expect(address).toBe('0x16db25945A4262529874c6eEF460E0C4b55618Fd');
  });
});