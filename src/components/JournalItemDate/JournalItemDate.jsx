function JournalItemDate({ date }) {
	const formatter = new Intl.DateTimeFormat('ru-RU');

	return formatter.format(date);
}

export default JournalItemDate;
