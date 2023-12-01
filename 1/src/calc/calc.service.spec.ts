import { Test, TestingModule } from "@nestjs/testing";
import { CalcService } from "./calc.service";
import { list } from "./data";

describe("CalcService", () => {
  let service: CalcService;

  const testData = [
    "1abc2",
    "pqr3stu8vwx",
    "a1b2c3d4e5f",
    "treb7uchet"
  ];
  const testData2 = [
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen"
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcService]
    }).compile();

    service = module.get<CalcService>(CalcService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should calc line I", () => {
    expect(service.line(testData[0])).toEqual(12);
    expect(service.line(testData[1])).toEqual(38);
    expect(service.line(testData[2])).toEqual(15);
    expect(service.line(testData[3])).toEqual(77);
  });

  it("should calc line II", () => {
    expect(service.line(testData2[0])).toEqual(29);
    expect(service.line(testData2[1])).toEqual(83);
    expect(service.line(testData2[2])).toEqual(13);
    expect(service.line(testData2[3])).toEqual(24);
    expect(service.line(testData2[4])).toEqual(42);
    expect(service.line(testData2[5])).toEqual(14);
    expect(service.line(testData2[6])).toEqual(76);
  });

  it("should calc lines ", () => {
    expect(service.lines(testData)).toEqual([12, 38, 15, 77]);
  });

  it("should calc lines ", () => {
    expect(service.line("six3zbhvrfhsevennine")).toEqual(service.line("six3zbhvrfhsevenine"));
  });

  it("should be total II", () => {
    expect(service.total(testData2)).toEqual(281);
  });

  it("should be total higher than 54412", () => {
    expect(service.total(list)).toBeGreaterThan(54412);
  });

  it("should calc plmkvpjbqr1", () => {
    expect(service.line('plmkvpjbqr1')).toEqual(11);
  });

  it("should be total lower than 54426", () => {
    expect(service.total(list)).toBeLessThan(54426);
    console.log(service.total(list));
  });
});
