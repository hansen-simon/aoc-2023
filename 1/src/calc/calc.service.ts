import { Injectable } from "@nestjs/common";

const digitWords: [string, number][] = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9]
];

@Injectable()
export class CalcService {

  public line(str: string): number {
    const line = str.toLowerCase();

    const firstFinding = line.match(
      /[1-9]|(one|two|three|four|five|six|seven|eight|nine)/
    );

    const reversed = this.reverse(line.substring(firstFinding.index));
    const lastFinding = reversed.match(
      /[1-9]|(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/
    );

    if (!lastFinding) {
      return this.toNumber(firstFinding[0]);
    }

    const first = this.toNumber(firstFinding[0]);
    const last = this.toNumber(this.reverse(lastFinding[0]));
    const val = `${first}${last}`;
    return Number(val);
  }

  public lines(str: string[]): number[] {
    const lines = str.map((s) => [s, this.line(s)]);
    return lines.map(([, n]) => n as number);
  }

  public total(str: string[]): number {
    const sum = this.lines(str).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }

  private toNumber(str: string): number {
    const n = str.search(/[1-9]/);
    if (n >= 0) {
      return Number(str.substring(n, 1));
    }
    const [first] = str.match(/(one|two|three|four|five|six|seven|eight|nine)/);
    return digitWords.find(([w]) => w === first)[1];
  }

  private reverse(str: string): string {
    return str.split("").reverse().join("");
  }
}

