function GeracaoDeTempo(valor: string) {
  if (valor == "horas") {
    const dateTime = new Date();
    const horas = dateTime.getHours();
    const minutos = dateTime.getMinutes();
    const segundos = dateTime.getSeconds();
    const formatarData = [horas, minutos, segundos].join(":");
    return formatarData;
  }
  if (valor == "dias") {
    const dateTime = new Date();
    const dias = dateTime.getUTCDate();
    const mes = dateTime.getUTCMonth() + 1;
    const ano = dateTime.getUTCFullYear();
    const formatarData = [ano, mes, dias].join("-");
    return formatarData;
  }
}
export default GeracaoDeTempo;
