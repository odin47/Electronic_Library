//var rest_URL = {
//		books:{
//			url:'http://localhost:5555/rest/BookREST',
//			method:'GET',
//			isArray:true
//		}
//}
//
//function restServiceProvider(){
//	
//}

var REST_URLS = {
	    PIE_CHART_LOCAL_GET: {
	        url: 'http://localhost:5555/rest/BookREST',
	        method: 'GET',
	        isArray: true
	    }
	}
	function RestServiceProvider() {
	    this.$get = ["$http", function RestService($http) {
	        this.instance = new RestServiceProvider();
	        this.instance.$http = $http;
	        return this.instance;
	    }];
	    this.invoke = function(URLobj, successCallback, errorCallback, parameters, data, scope, pathParam) {
	        var urlString = URLobj.url;
	        if (pathParam) {
	            urlString = urlString + '/' + pathParam;
	        }
	        if (parameters) {
	            for (i = 0; i < parameters.length; i++) {
	                if (i == 0) {
	                    urlString = urlString + '?' + parameters[i].name + "=" + parameters[i].value;
	                } else {
	                    urlString = urlString + '&' + parameters[i].name + "=" + parameters[i].value;
	                }
	            }
	        }
	 
	        var successFunc = function(response, status, headers, config) {
	            successCallback(response, status, headers, config, scope);
	        };
	        var errorFunc = function(response, status, headers, config) {
	            if (status != 0) {
	                errorCallback(response, status, headers, config, scope);
	            }
	        };
	        var httpURL = {
	            method: URLobj.method,
	            url: urlString,
	            data: data,
	            withCredentials: true,
	            headers: URLobj.headers,
	            successHandle: successFunc,
	            errorHandle: errorFunc
	        };
	        this.$http(httpURL).success(successFunc).error(errorFunc);
	    }
	};
	 
	angular.module('OpenCAFApp.RestService', [])
	    .provider('RestServiceProvider', RestServiceProvider);