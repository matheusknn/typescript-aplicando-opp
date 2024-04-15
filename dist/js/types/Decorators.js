export function ValidarDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDebito) {
        if (valorDebito <= 0) {
            throw new Error("o valor a ser debitado precisa ser maior do que 0");
        }
        if (valorDebito > this.saldo) {
            throw new Error("Seu saldo é insuficiente para realizar a operação!");
        }
        return originalMethod.apply(this, [valorDebito]);
    };
    return descriptor;
}
