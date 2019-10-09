const gameResults = {
  NOT_YET: 'normal',
  WAIT: 'wait',
  FAIL: 'fail',
  WIN: 'win'
}

const gameGrades = {
  JUNIOR_GRADE: {
    ROW_NUM: 9,
    MINE_NUM: 16
  },
  MIDDLE_GRADE: {
    ROW_NUM: 16,
    MINE_NUM: 40
  },
  SENIOR_GRADE: {
    ROW_NUM: 25,
    MINE_NUM: 99
  }
}

export { gameResults, gameGrades }
