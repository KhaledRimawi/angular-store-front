import { Pipe, PipeTransform } from '@angular/core';
import { CURRENCY_CONFIG } from '../../core/constants/app.constants';

/**
 * Currency formatting pipe
 * Formats numbers as currency with proper symbol and decimal places
 */
@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || isNaN(value)) {
      return `${CURRENCY_CONFIG.SYMBOL}0.00`;
    }

    const formatted = value.toFixed(CURRENCY_CONFIG.DECIMAL_PLACES);
    return `${CURRENCY_CONFIG.SYMBOL}${formatted}`;
  }
}
