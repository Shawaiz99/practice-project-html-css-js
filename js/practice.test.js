test("toBe - checks strict equality", () => {
    const sum = 5 + 10;
    // sum should be 15
    expect(sum).toBe(15);
  });

  //toEqual()
  it('toEqual - checks object equality', () => {
    const user = {name: 'John Doe', age: 35};
    const expectUser = {name: 'John Doe', age: 35};

    expect(user).toEqual(expectUser);
  });