enum ResponseCode {
  Unauthorized = 401,
  OK = 200,
  NoContent = 204,
}

enum AppRoutes {
  Main = '/',
  SignIn = '/signin',
}

enum ApiRoutes {
  Register = '/register',
  Login = '/login',
  Users = '660/profiles',
}

enum SortingType {
  None = 'None',
  ByDate = 'ByDate',
  ByUser = 'ByUser',
}

enum FilterType {
  None = 'None',
  ByCountry = 'ByCountry',
  ByPremium = 'ByPremium',
}

export {
  ResponseCode, ApiRoutes, AppRoutes, SortingType, FilterType,
};
