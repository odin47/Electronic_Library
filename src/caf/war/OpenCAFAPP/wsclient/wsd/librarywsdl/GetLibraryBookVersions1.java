package caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl;


import com.webmethods.caf.faces.data.ws.glue.GlueWSClientContentProvider;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.ExpireWithPageFlow;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;

/**
 * Glue Web Service Client bean generated for 
 * caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.IlibraryWSDL_PortType.getLibraryBookVersions.
 */
@ManagedBean(name = "GetLibraryBookVersions")
@SessionScoped
@ExpireWithPageFlow
@DTManagedBean(beanType = BeanType.DEFAULT)
public class GetLibraryBookVersions1 extends GlueWSClientContentProvider {

	private static final long serialVersionUID = 3850715910709011456L;

	/**
	 * Default constructor
	 */
	public GetLibraryBookVersions1() {
		super(caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.IlibraryWSDL_PortType.class, // port type proxy class
			"getLibraryBookVersions", // method to invoke
			new String[] { "getLibraryBookVersions", }, // method parameter names
			new Class[] { caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersions.class, } // method parameter types
		);
		// wsdl and maps by are saved in the same package
		setWsdlUrl("classpath:libraryWSDL.wsdl");
		setMapUrls(new String[] { "classpath:libraryWSDL.map", });

		// init wsclient
		initParams();
		
		// parameters bean
		parameters = new Parameters();
		
		// complex output, just a place holder
		result = new caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersionsResponse();
		
	}
	
	
	/**
	 * Method parameters bean
	 */
	public class Parameters  implements java.io.Serializable {

		private static final long serialVersionUID = 2297546699438441472L;

		public Parameters() {
		}
	
		private caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersions getLibraryBookVersions  = new  caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersions() ;

		public caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersions getGetLibraryBookVersions() {
			return getLibraryBookVersions;
		}

		public void setGetLibraryBookVersions(caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersions getLibraryBookVersions) {
			this.getLibraryBookVersions = getLibraryBookVersions;
		} 	
		
	}
	
	
	
	/**
	 * Return method invocation parameters bean
	 */
	public Parameters getParameters() {
		return (Parameters)parameters;
	}	
	


	
	/**
	 * Return method invocation result
	 */
	public caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersionsResponse getResult() {
		return (caf.war.OpenCAFAPP.wsclient.wsd.librarywsdl.getLibraryBookVersionsResponse)result;
	}
	

		
}