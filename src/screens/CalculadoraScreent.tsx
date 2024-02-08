
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculadora} from '../Hooks/useCalculadora';

export const CalculadoraScreent = () => {
  const {
    previousNumber,
    numberBase,
    clearResult,
    AssaembleNumber,
    btnAddition,
    btnDelete,
    btnDivision,
    btnMultiplication,
    btnSubtraction,
    calculate,
    PositiveNegative,
  } = useCalculadora();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultSmall}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numberBase}
      </Text>

      {/* Fila de Botones */}
      <View style={styles.stylesFiel}>
        <ButtonCalc text="C" color="#9B9B9B" funtions={clearResult} />
        <ButtonCalc text="+/-" color="#9B9B9B" funtions={PositiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" funtions={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" funtions={btnDivision} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.stylesFiel}>
        <ButtonCalc text="7" funtions={AssaembleNumber} />
        <ButtonCalc text="8" funtions={AssaembleNumber} />
        <ButtonCalc text="9" funtions={AssaembleNumber} />
        <ButtonCalc text="x" color="#FF9427" funtions={btnMultiplication} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.stylesFiel}>
        <ButtonCalc text="4" funtions={AssaembleNumber} />
        <ButtonCalc text="5" funtions={AssaembleNumber} />
        <ButtonCalc text="6" funtions={AssaembleNumber} />
        <ButtonCalc text="-" color="#FF9427" funtions={btnSubtraction} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.stylesFiel}>
        <ButtonCalc text="1" funtions={AssaembleNumber} />
        <ButtonCalc text="2" funtions={AssaembleNumber} />
        <ButtonCalc text="3" funtions={AssaembleNumber} />
        <ButtonCalc text="+" color="#FF9427" funtions={btnAddition} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.stylesFiel}>
        <ButtonCalc text="0" sizeButton funtions={AssaembleNumber} />
        <ButtonCalc text="." funtions={AssaembleNumber} />
        <ButtonCalc text="=" color="#FF9427" funtions={calculate} />
      </View>
    </View>
  );
};
// colores Gris Oscuro #2D2D2D
// colores Naranja #FF9427
