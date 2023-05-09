let pecaXadrez = 'cavalo';



switch (pecaXadrez.toLowerCase()) {
case 'rei':
    console.log('direcao: qualquer / numero de casas: 1 por vez' );
    break ;
    case 'rainha':
    console.log('direcao: qualquer uma em linha reta / numero de casas:  quantas quiser' );
    break;
    case 'torre':
    console.log('direcao: diagonal e vertival em linha reta / numero de casas: quantas quiser' );
    break;
    case 'bispo':
    console.log('direcao: diagonal  / numero de casas: quantas quiser' );
    break;
    case 'cavalo':
    console.log('direcao: qualqer desde q seja movimentada em L/ numero de casas: 3' );
    break;
    case 'peão':
    console.log('direcao: para frente / numero de casas: 2 na primeira jogada 1 nas demais' );
    break;
};