import React, { Component } from 'react'
import './App.css'
import Schedule from './schedule.json'
import Img_Manager from './img/bg.png'
import Img_Coffee from './img/coffee.png'

class App extends Component {
	constructor(props) {
		super(props)
		var date = new Date()
		this.state = {
			date: date.getMonth() + 1 + '-' + date.getDate(),
			schedule: Schedule,
		}
	}
	componentDidMount = () => {
		console.log(this.state.schedule)
	}
	render() {
		return (
			<div className="App">
				<div className="flex-centered">
					<Calendar setDate={this.setDate} />
				</div>
				<TimeTable date={this.state.date} schedule={this.state.schedule} />
			</div>
		)
	}

	setDate = date => {
		this.setState({ date: date })
	}
}

class TimeTable extends Component {
	render = () => {
		var sch = []
		for (var employee in this.props.schedule[this.props.date]) {
			sch.push([employee, this.props.schedule[this.props.date][employee]])
		}

		return (
			<div className="time-table">
				<table style={{ width: '100%' }}>
					<thead>
						<tr>
							<th>Employee</th>
							<th>12a</th>
							<th>1a</th>
							<th>2a</th>
							<th>3a</th>
							<th>4a</th>
							<th>5a</th>
							<th>6a</th>
							<th>7a</th>
							<th>8a</th>
							<th>9a</th>
							<th>10a</th>
							<th>11a</th>
							<th>12p</th>
							<th>1p</th>
							<th>2p</th>
							<th>3p</th>
							<th>4p</th>
							<th>5p</th>
							<th>6p</th>
							<th>7p</th>
							<th>8p</th>
							<th>9p</th>
							<th>10p</th>
							<th>11p</th>
						</tr>
					</thead>

					<tbody>
						{sch.map((e, i) => {
							var posImg = {
								manager: Img_Manager,
								coffee: Img_Coffee,
							}
							var pos = posImg[e[1].pos]
							var fill = {
								backgroundImage: pos ? 'url(' + pos + ')' : 'none',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}
							console.log(fill)
							var hours = []

							for (var j = e[1].start; j <= e[1].end; j++) {
								hours.push(j)
							}

							return (
								<tr key={'e' + i}>
									<td title={e[1].pos}>{e[0]}</td>
									<td style={hours.includes(0) ? fill : null} />
									<td style={hours.includes(1) ? fill : null} />
									<td style={hours.includes(2) ? fill : null} />
									<td style={hours.includes(3) ? fill : null} />
									<td style={hours.includes(4) ? fill : null} />
									<td style={hours.includes(5) ? fill : null} />
									<td style={hours.includes(6) ? fill : null} />
									<td style={hours.includes(7) ? fill : null} />
									<td style={hours.includes(8) ? fill : null} />
									<td style={hours.includes(9) ? fill : null} />
									<td style={hours.includes(10) ? fill : null} />
									<td style={hours.includes(11) ? fill : null} />
									<td style={hours.includes(12) ? fill : null} />
									<td style={hours.includes(13) ? fill : null} />
									<td style={hours.includes(14) ? fill : null} />
									<td style={hours.includes(15) ? fill : null} />
									<td style={hours.includes(16) ? fill : null} />
									<td style={hours.includes(17) ? fill : null} />
									<td style={hours.includes(18) ? fill : null} />
									<td style={hours.includes(19) ? fill : null} />
									<td style={hours.includes(20) ? fill : null} />
									<td style={hours.includes(21) ? fill : null} />
									<td style={hours.includes(22) ? fill : null} />
									<td style={hours.includes(23) ? fill : null} />
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}

class Calendar extends Component {
	constructor(props) {
		super(props)
		var date = new Date()
		this.state = {
			year: date.getFullYear(),
			month: date.getMonth(),
			selectedYear: date.getFullYear(),
			selectedMonth: date.getMonth(),
			selectedDate: date.getDate(),
			selectedDt: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
			startDay: 1,
			weekNumbers: false,
			minDate: this.props.minDate ? this.props.minDate : null,
			disablePast: this.props.disablePast ? this.props.disablePast : false,
			dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			monthNames: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
			monthNamesFull: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			firstOfMonth: null,
			daysInMonth: null,
		}
	}
	calc = (year, month) => {
		if (this.state.selectedElement) {
			if (this.state.selectedMonth !== month || this.state.selectedYear !== year) {
				this.state.selectedElement.classList.remove('r-selected')
			} else {
				this.state.selectedElement.classList.add('r-selected')
			}
		}
		return {
			firstOfMonth: new Date(year, month, 1),
			daysInMonth: new Date(year, month + 1, 0).getDate(),
		}
	}
	componentWillMount = () => {
		this.setState(this.calc.call(null, this.state.year, this.state.month))
	}
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.onSelect && prevState.selectedDt !== this.state.selectedDt) {
			this.props.onSelect.call(this.getDOMNode(), this.state)
		}
	}
	getPrev = () => {
		var state = {}
		if (this.state.month > 0) {
			state.month = this.state.month - 1
			state.year = this.state.year
		} else {
			state.month = 11
			state.year = this.state.year - 1
		}
		Object.assign(state, this.calc.call(null, state.year, state.month))
		this.setState(state)
	}
	getNext = () => {
		var state = {}
		if (this.state.month < 11) {
			state.month = this.state.month + 1
			state.year = this.state.year
		} else {
			state.month = 0
			state.year = this.state.year + 1
		}
		Object.assign(state, this.calc.call(null, state.year, state.month))
		this.setState(state)
	}
	selectDate = (year, month, date, element) => {
		if (this.state.selectedElement) {
			this.state.selectedElement.classList.remove('r-selected')
		}
		element.target.classList.add('r-selected')
		this.setState(
			{
				selectedYear: year,
				selectedMonth: month,
				selectedDate: date,
				selectedDt: new Date(year, month, date),
				selectedElement: element.target,
			},
			() => {
				this.props.setDate(this.state.selectedMonth + 1 + '-' + this.state.selectedDate)
			}
		)
	}
	render() {
		return (
			<div className="r-calendar">
				<div className="r-inner">
					<Header
						monthNames={this.state.monthNamesFull}
						month={this.state.month}
						year={this.state.year}
						onPrev={this.getPrev}
						onNext={this.getNext}
					/>
					<WeekDays
						dayNames={this.state.dayNames}
						startDay={this.state.startDay}
						weekNumbers={this.state.weekNumbers}
					/>
					<MonthDates
						month={this.state.month}
						year={this.state.year}
						daysInMonth={this.state.daysInMonth}
						firstOfMonth={this.state.firstOfMonth}
						startDay={this.state.startDay}
						onSelect={this.selectDate}
						weekNumbers={this.state.weekNumbers}
						disablePast={this.state.disablePast}
						minDate={this.state.minDate}
					/>
				</div>
			</div>
		)
	}
}

class Header extends Component {
	render() {
		return (
			<div className="r-row r-head">
				<div className="r-cell r-prev" onClick={this.props.onPrev} role="button" tabIndex="0" />
				<div className="r-cell r-title">
					{this.props.monthNames[this.props.month] + ' ' + this.props.year}
				</div>
				<div className="r-cell r-next" onClick={this.props.onNext} role="button" tabIndex="0" />
			</div>
		)
	}
}

class WeekDays extends Component {
	render() {
		var that = this,
			haystack = Array.apply(null, { length: 7 }).map(Number.call, Number)

		return (
			<div className="r-row r-weekdays">
				{that.props.weekNumbers ? <div className="r-cell r-weeknum">wn</div> : null}
				{haystack.map((item, i) => {
					return (
						<div className="r-cell" key={'wd' + i}>
							{that.props.dayNames[(that.props.startDay + i) % 7]}
						</div>
					)
				})}
			</div>
		)
	}
}

class MonthDates extends Component {
	render() {
		var haystack,
			day,
			d,
			current,
			isDate,
			className,
			weekStack = Array.apply(null, { length: 7 }).map(Number.call, Number),
			that = this,
			startDay = this.props.firstOfMonth.getUTCDay(),
			first = this.props.firstOfMonth.getDay(),
			janOne = new Date(that.props.year, 0, 1),
			rows = 5

		if (
			(startDay === 5 && this.props.daysInMonth === 31) ||
			(startDay === 6 && this.props.daysInMonth > 29)
		) {
			rows = 6
		}

		className = rows === 6 ? 'r-dates' : 'r-dates r-fix'
		haystack = Array.apply(null, { length: rows }).map(Number.call, Number)
		day = this.props.startDay + 1 - first
		while (day > 1) {
			day -= 7
		}
		day -= 1

		//var wn = Math.ceil(
		//((new Date(that.props.year, that.props.month, d) - janOne) / 86400000 + janOne.getDay() + 1) /
		//7
		//)

		{
			/*return(
			<div className={className}>
				{haystack.map((item, i) => {
					d = day + i * 7
					return <div className="r-row">{that.props.weekNumbers ? { wn } : null}</div>
				})}
			</div>
		)*/
		}

		return React.createElement(
			'div',
			{ className: className },
			haystack.map(function(item, i) {
				d = day + i * 7
				return React.createElement(
					'div',
					{ className: 'r-row', key: 'md' + i },
					(() => {
						if (that.props.weekNumbers) {
							var wn = Math.ceil(
								((new Date(that.props.year, that.props.month, d) - janOne) / 86400000 +
									janOne.getDay() +
									1) /
									7
							)
							return React.createElement('div', { className: 'r-cell r-weeknum' }, wn)
						}
					})(),
					weekStack.map(function(item, i) {
						d += 1
						isDate = d > 0 && d <= that.props.daysInMonth

						if (isDate) {
							current = new Date(that.props.year, that.props.month, d)
							className =
								current !== that.constructor.today ? 'r-cell r-date' : 'r-cell r-date r-today'
							if (that.props.disablePast && current < that.constructor.today) {
								className += ' r-past'
							} else if (that.props.minDate !== null && current < that.props.minDate) {
								className += ' r-past'
							}

							if (/r-past/.test(className)) {
								return React.createElement(
									'div',
									{ className: className, role: 'button', tabIndex: '0', key: 'mdd' + i },
									d
								)
							}

							return React.createElement(
								'div',
								{
									className: className,
									role: 'button',
									tabIndex: '0',
									onClick: that.props.onSelect.bind(that, that.props.year, that.props.month, d),
									key: 'mdd' + i,
								},
								d
							)
						}

						return React.createElement('div', { className: 'r-cell', key: 'mddd' + i })
					})
				)
			})
		)
	}
}

export default App
