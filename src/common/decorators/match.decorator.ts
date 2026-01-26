import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function Match<T extends object>(
  property: keyof T,
  validationOptions?: ValidationOptions,
) {
  return (object: T, propertyName: string) => {
    registerDecorator({
      name: 'Match',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property as string],
      validator: MatchConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'Match' })
class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: unknown, args: ValidationArguments): boolean {
    const [relatedPropertyName] = args.constraints as [string];
    const relatedValue = (args.object as Record<string, unknown>)[
      relatedPropertyName
    ];
    return (
      typeof value === 'string' &&
      typeof relatedValue === 'string' &&
      value === relatedValue
    );
  }

  defaultMessage(args: ValidationArguments): string {
    const [relatedPropertyName] = args.constraints as [string];
    return `${String(args.property)} must match ${relatedPropertyName}`;
  }
}
