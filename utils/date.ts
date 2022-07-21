import dayjs from "dayjs";

export function formatDate(date: Date): string {
  return dayjs(date).format('YYYY-MM-DD')
}

export function today(): string {
  return formatDate(new Date())
}
