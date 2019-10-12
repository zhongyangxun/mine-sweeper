const gameResults = {
  NOT_YET: 'normal',
  WAIT: 'wait',
  FAIL: 'fail',
  WIN: 'win'
}

const gradeKeys = {
  JUNIOR: 'JUNIOR',
  MIDDLE: 'MIDDLE',
  SENIOR: 'SENIOR'
}

const gameGrades = {
  [gradeKeys.JUNIOR]: {
    ROW_NUM: 9,
    MINE_NUM: 16
  },
  [gradeKeys.MIDDLE]: {
    ROW_NUM: 16,
    MINE_NUM: 40
  },
  [gradeKeys.SENIOR]: {
    ROW_NUM: 25,
    MINE_NUM: 99
  }
}

export { gameResults, gradeKeys, gameGrades }
